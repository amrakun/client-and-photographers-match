import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native"
import React from "react"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={15}
          color={Colors.medium}
        />
        <TextInput
          style={styles.input}
          placeholder="Restaurants, groceries, dishes"
        />
      </View>
      <Link href={"/"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
)

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery · Now </Text>
          <View style={styles.locationName}>
            <Text style={styles.subTitle}>San Francisco, CA</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  titleContainer: { flex: 1 },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  title: { fontSize: 14, color: Colors.medium },
  subTitle: { fontSize: 16, fontWeight: "bold" },
  locationName: { flexDirection: "row", alignItems: "center" },
  searchContainer: { height: 60, backgroundColor: "#fff" },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchIcon: { paddingLeft: 10 },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: { padding: 10, borderRadius: 50 },
  input: {
    padding: 10,
    color: Colors.mediumDark,
    width: "90%",
  },
})

export default CustomHeader
