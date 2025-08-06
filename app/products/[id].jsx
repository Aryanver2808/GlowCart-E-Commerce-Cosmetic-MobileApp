import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(null);
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || "Error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#d35f74" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.retryBtn}>
          <Text style={{ color: "#fff" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const highlights = [
    { label: "Width", value: "15.14" },
    { label: "Height", value: "13.08" },
    { label: "Warranty", value: "1 week" },
    { label: "Shipping", value: "3-5 business days" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Eleanor Collins",
      email: "eleanor.collins@gmail.com",
      comment: "Would not recommend...",
      rating: 2,
    },
    {
      id: 2,
      name: "Lucas Gordon",
      email: "lucas.gordon@gmail.com",
      comment: "Very satisfied!",
      rating: 4,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      {/* View Similar */}
      <TouchableOpacity style={styles.viewSimilar}>
        <Text style={styles.viewSimilarText}>View Similar</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Rating */}
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="#000" />
        <Text style={styles.ratingText}>
          {product.rating ?? "4.0"}/5
        </Text>
      </View>

      {/* Category */}
      <Text style={styles.soldBy}>Category: {product.category}</Text>

      {/* Price & Add to Bag */}
      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.addToBag}>
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>

      {/* Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.highlightsGrid}>
          {highlights.map((item) => (
            <View key={item.label} style={styles.highlightItem}>
              <Text style={styles.highlightLabel}>{item.label}</Text>
              <Text>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Ratings & Reviews */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <Text style={styles.reviewerName}>{review.name}</Text>
            <Text style={styles.reviewerEmail}>{review.email}</Text>
            <View style={styles.starsRow}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Ionicons
                  key={i}
                  name={i < review.rating ? "star" : "star-outline"}
                  size={16}
                  color="#333"
                />
              ))}
            </View>
            <Text>{review.comment}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeceb",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 8,
  },
  viewSimilar: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 8,
  },
  viewSimilarText: {
    color: "#d35f74",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    marginTop: 4,
    color: "#555",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: "#000",
  },
  soldBy: {
    marginTop: 4,
    color: "#333",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  addToBag: {
    backgroundColor: "#d35f74",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addToBagText: {
    color: "#fff",
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  highlightItem: {
    width: "50%",
    marginBottom: 8,
  },
  highlightLabel: {
    fontWeight: "bold",
    color: "#000",
  },
  reviewCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  reviewerName: {
    fontWeight: "bold",
    color: "#000",
  },
  reviewerEmail: {
    color: "#777",
    fontSize: 12,
  },
  starsRow: {
    flexDirection: "row",
    marginVertical: 4,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  retryBtn: {
    marginTop: 12,
    backgroundColor: "#d35f74",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
