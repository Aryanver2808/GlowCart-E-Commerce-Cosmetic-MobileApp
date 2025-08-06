
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="pink" />
        <Text>Loading Products...</Text>
      </View>
    );
  }
    return (
  <View style={styles.container}>
    {/* Top Brand & Icons Row */}
    <View style={styles.topBar}>
      <Text style={styles.brandText}>Viorra</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={{ marginRight: 16 }}>
          <Ionicons name="notifications-outline" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bag-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>

    {/* Search Bar */}
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={18} color="gray" style={{ marginLeft: 8 }} />
      <TextInput
        placeholder="Search for all products"
        style={styles.searchInput}
      />
    </View>

    {/* Best Products + Filter */}
    <View style={styles.headerRow}>
      <Text style={styles.headerTitle}>Best Products</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Apply Filter</Text>
        <Ionicons name="chevron-down" size={16} color="#000" />
      </TouchableOpacity>
    </View>

    <Text style={styles.productCount}>{products.length} products</Text>

    {/* Product Grid */}
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 100 }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/products/${item.id}`)}
          style={styles.card}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.cardPrice}>${item.price}</Text>
          <TouchableOpacity style={styles.heartIcon}>
            <Ionicons name="heart-outline" size={20} color="#555" />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    />
  </View>
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEEEEE",
    paddingHorizontal: 16,
    paddingTop: 50, // space for status bar
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  brandText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D92D72",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  filterButtonText: {
    fontSize: 14,
    marginRight: 4,
  },
  productCount: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
    width: "48%",
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
  },
});
