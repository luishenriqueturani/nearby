import { useEffect, useRef, useState } from "react";
import { Alert, Modal, ScrollView, StatusBar, View } from "react-native";
import { api } from "@/services/api";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { Loader } from "@/components/loader";
import { Cover } from "@/components/market/cover";
import { Details, IDetails } from "@/components/market/details";
import { Coupon } from "@/components/market/coupon";
import { Button } from "@/components/button";
import { CameraView, useCameraPermissions } from "expo-camera";


interface MarketProps extends IDetails {
  cover: string;
}

export default function Market() {

  const params = useLocalSearchParams<{ id: string }>();

  const qrLock = useRef(false)

  const [market, setMarket] = useState<MarketProps>()

  const [isLoading, setIsLoading] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [coupon, setCoupon] = useState<string | null>(null)

  const [couponIsFetching, setCouponIsFetching] = useState(false)


  const [_, requestPermissions] = useCameraPermissions();

  async function fetchMarket(){
    try {
      const { data } = await api.get<MarketProps>(`/markets/${params.id}`)

      console.log(data)
      
      setIsLoading(false)
      return data
    } catch (error) {
      console.log(error)
      Alert.alert("Market", "Deu ruim, caralho!",[
        { text: "OK", onPress: () => router.back() },
      ])
    }
    
  }

  async function handleOpenCamera(){
    try {

      const { granted } = await requestPermissions();

      if (!granted) {
        Alert.alert('Câmera', 'Permission to access camera was denied');
        return;
      }

      qrLock.current = false 
      setIsModalOpen(true)
    } catch (error) {
      console.log(error)
      Alert.alert("Camera", "Não foi possível utilizar a câmera")
    }
  }

  async function getCoupon(id: string){
    try {
      setCouponIsFetching(true)

      const { data } = await api.patch(`/coupons/${id}`)



      setCoupon(data)
      
    } catch (error) {
      console.log(error)
      Alert.alert("Coupon", "Não foi possível obter o cupom")
    } finally {

      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(id: string){
    setIsModalOpen(false)

    Alert.alert("Cupom", "Não é possível reutilizar um cupon resgatado, deseja realmente resgatar o cupon?", [
      { text: "Não", style: "cancel"},
      { text: "Sim", onPress: () => getCoupon(id) },
    ])
  }

  useEffect(() => {
    fetchMarket().then(setMarket)
  }, [params.id, coupon])


  if(isLoading) return <Loader />

  if(!market) return <Redirect href="/home" />

  return (
    <View 
      style={{ 
        flex: 1, 
      }}
    >
      <StatusBar barStyle="light-content" hidden={isModalOpen} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Cover uri={market?.cover} />

        <Details data={market} />


        {coupon && <Coupon code={coupon} />}
      </ScrollView>


      <View
        style={{
          padding: 16
        }}
      >
        <Button
          onPress={handleOpenCamera}
        >
          <Button.Title>Ler o QR Code</Button.Title>
        </Button>
      </View>

      <Modal
        style={{
          flex: 1,
        }}
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >

        <CameraView 
          style={{ flex: 1 }}
          onBarcodeScanned={({ data }) => {

            if(!data || qrLock.current) return

            qrLock.current = true
            handleUseCoupon(data)
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
          }}
        >
          <Button
            onPress={() => setIsModalOpen(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
}



