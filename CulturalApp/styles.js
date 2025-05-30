import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#ff6f61',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#0288d1',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0288d1',
  },
  headerImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFC107',
  },
  detailImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#FFC107',
  },
  postImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#FFC107',
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    height: 100,
    marginBottom: 10,
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: '#0288d1',
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: '#0288d1',
    color: '#333',
  },
  pickerItem: {
    fontSize: 16,
    color: '#333',
  },
  experienceCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#ff6f61',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  star: {
    fontSize: 30,
    color: '#FFC107',
    marginHorizontal: 5,
  },
  phraseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#0288d1',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likeButton: {
    color: '#ff6f61',
    fontSize: 16,
    marginRight: 10,
  },
  aboutButton: {
    backgroundColor: '#ff6f61',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;