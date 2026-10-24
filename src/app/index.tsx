
import { useState } from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import InfoCard from '../components/InfoCard';

type Mahasiswa = {
  id: string;
  nama: string;
  prodi: string;
};

const DAFTAR_MAHASISWA: Mahasiswa[] = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function Index() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFiltered = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.header}>UTS PEMROGRAMAN MOBILE</Text>
      <Text style={styles.subtitle}>React Native Expo</Text>

      <Text style={styles.sectionTitle}>
        Soal 1 — Information Cards
      </Text>

      <InfoCard
        title="Praktikum React Native"
        status="selesai"
        onPress={() =>
          Alert.alert(
            'Detail Aktivitas',
            'Praktikum React Native telah selesai.'
          )
        }
      />

      <InfoCard
        title="Pengembangan Aplikasi Mobile"
        status="proses"
        onPress={() =>
          Alert.alert(
            'Detail Aktivitas',
            'Pengembangan aplikasi masih dalam proses.'
          )
        }
      />

      <Text style={styles.sectionTitle}>
        Soal 2 — Direktori Mahasiswa
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
        autoCapitalize="none"
      />

      <Text style={styles.resultCount}>
        Hasil pencarian: {mahasiswaFiltered.length} mahasiswa
      </Text>

      <FlatList
        data={mahasiswaFiltered}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.nama.charAt(0)}
              </Text>
            </View>

            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>{item.nama}</Text>
              <Text style={styles.prodi}>{item.prodi}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Data tidak ditemukan!
          </Text>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
  },
  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1D4ED8',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 6,
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 14,
    marginTop: 8,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 10,
  },
  resultCount: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 12,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#1D4ED8',
    fontWeight: 'bold',
    fontSize: 18,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  prodi: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: '#DC2626',
    padding: 20,
    fontSize: 15,
  },
});
