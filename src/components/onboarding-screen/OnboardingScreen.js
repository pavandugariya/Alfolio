import { StyleSheet, Text, View, FlatList, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { onboarding, } from '../../lang/main.json'
import { onBoardingColor } from './onBoardingcolors';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    // console.log(onboarding.swipedata[0]);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [currentSlideIndex, setcurrentSlideIndex] = useState(0)
    const ref = React.useRef();

    const Slide = ({ item }) => {
        const getImage = (e) => {
            switch (e) {
                case '1':
                    return require('../../Images/onboarding1.png')
                    break;
                case '2':
                    return require('../../Images/onboarding2.png')
                    break;
                case '3':
                    return require('../../Images/onboarding3.png')
                    break;
            }

        }
        return (
            <View style={[styles.img_box, { width: windowWidth * 0.95, height: windowHeight * 0.95, }]}>
                <Image
                    source={getImage(item.image)}
                    style={{
                        height: '60%',
                        width: windowWidth * 0.65,
                        resizeMode: 'contain',
                        // backgroundColor: '#555',
                        // marginTop: -80
                    }}
                />
                <Text style={{
                    fontSize: 27,
                    color: onBoardingColor.title_color,
                    letterSpacing: 3,
                    fontWeight: '800',
                    marginVertical: 20,
                    fontFamily: onBoardingColor.FontH

                }}>{item.title}</Text>
                <Text style={{
                    fontSize: 18,
                    color: onBoardingColor.message_color,
                    lineHeight: 28,
                    width: '100%',
                    fontFamily: onBoardingColor.FontM
                }}>{item.message}</Text>

            </View>
        );
    }
    const Footer = () => {
        return (
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                {
                    onboarding.swipedata.map((_, index) => {
                        return (
                            <View key={index}
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: index == currentSlideIndex ? onBoardingColor.indicator_color : '#adaaaa',
                                    borderRadius: 15,
                                    marginHorizontal: 10,

                                }}></View>
                        )
                    })
                }
            </View>
        )
    }
    const Footer2 = () => {
        const skipPress = () => {
            // const lastIndex = onboarding.swipedata.length - 1;
            // const offset = lastIndex * windowWidth;
            // ref?.current?.scrollToOffset({ offset });
            // setcurrentSlideIndex(lastIndex)
            navigation.replace('Login')

        }
        const nextSlidePress = () => {
            const nextSlideIndex = currentSlideIndex + 1;
            if (nextSlideIndex != onboarding.swipedata.length) {
                const offset = nextSlideIndex * windowWidth;
                ref?.current?.scrollToOffset({ offset });
                setcurrentSlideIndex(currentSlideIndex + 1)
            }
        }
        const getStart = () => {
            navigation.replace('Login')
        }
        return (
            <View style={styles.footer2_top_box}>
                {
                    currentSlideIndex != onboarding.swipedata.length - 1 ?
                        <>

                            <TouchableOpacity style={styles.skip_btn_style}
                                onPress={skipPress}
                            >
                                <Text style={styles.skip_btn_txt_style}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={nextSlidePress}
                                style={styles.next_btn_style}              >
                                <Text style={styles.next_btn_txt_style}>Next</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <TouchableOpacity
                            onPress={getStart}
                            style={[styles.next_btn_style, { flex: 1 }]}
                        >
                            <Text style={[styles.next_btn_txt_style,]}>Get Started</Text>
                        </TouchableOpacity>
                }
            </View>
        )
    }
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / windowWidth);
        setcurrentSlideIndex(currentIndex)
    }
    return (
        <View >
            <ImageBackground source={require('../../Images/onboarding_bg.png')}
                style={[styles.container, { height: windowHeight, width: windowWidth }]} />

            <FlatList
                ref={ref}
                data={onboarding.swipedata}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: windowHeight * 0.80, }}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
            <Footer2 />

        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#f33',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_box: {
        marginHorizontal: 10,
        marginVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 10,
    },
    footer2_top_box: {
        height: 50,
        width: '100%',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30
    },
    skip_btn_style: {
        height: '90%',
        width: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: onBoardingColor.indicator_color2
    },
    next_btn_style: {
        height: '90%',
        width: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: onBoardingColor.indicator_color,
        backgroundColor: onBoardingColor.indicator_color
    },
    skip_btn_txt_style: {
        fontSize: 16,
        color: '#000',
        fontFamily: onBoardingColor.FontM
    },
    next_btn_txt_style: {
        fontSize: 16,
        color: '#fff',
        fontFamily: onBoardingColor.FontM

    }
})