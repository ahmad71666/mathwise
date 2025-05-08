import React, { FC, useMemo } from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Dimensions } from "react-native";
import Theme from "../../theme/theme";
import { HomeBG } from "../../assets/images";
import { FontStyle } from "../../theme/FontStyle";
import { useMainApp } from "../../context/MainAppContext";

interface LessonsProps {
    route: any;
    navigation: any;
}

const Lessons: FC<LessonsProps> = ({ route, navigation }) => {

    const mainApp = useMainApp();

    const subjectID = route?.params?.id;

    const selectedSubject = useMemo(() => {

        const subject = mainApp?.subjectsData?.find(iSubject => iSubject?.id === subjectID);

        return subject;

    }, [subjectID]);

    const renderSubjects = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Display', { uri: item.source })
            }} activeOpacity={0.5} style={styles.box}>
                <Text style={styles.boxHeading}>
                    {item?.title}
                </Text>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={Theme.SafeArea}>
            <View style={Theme.flex1}>
                <ImageBackground
                    source={HomeBG}
                    resizeMode='contain'
                    style={styles.imageContainer}
                >
                    <FlatList
                        ListHeaderComponent={
                            <Text style={[styles.heading]}>
                                {selectedSubject?.title}
                            </Text>
                        }
                        data={selectedSubject?.data}
                        renderItem={renderSubjects}
                        numColumns={2}
                        contentContainerStyle={styles.areaGap}
                        columnWrapperStyle={styles.ColumnareaGap}
                    />
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
    },
    heading: {
        ...FontStyle.semiBold26,
        marginTop: '15%',
        alignSelf: "center",
        marginBottom: 30,
        letterSpacing: 1,
        color: "black",
        marginHorizontal: 15
    },
    box: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 12,
        height: 150,
        rowGap: 10,
        justifyContent: "center",
        paddingHorizontal: 10,
        maxWidth: '42%'
    },
    areaGap: {
        rowGap: 20,
        paddingBottom: 20
    },
    ColumnareaGap: {
        columnGap: 10,
        alignSelf: "center",
    },
    boxHeading: {
        ...FontStyle.medium16,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black",
        fontWeight: "bold"
    }
});

export default Lessons;