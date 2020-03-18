import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1,
    backgroundColor: 'gray'
  },
  list: {
    marginTop: 30,
    flex: 1
    // backgroundColor: 'white'
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 23,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row'
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1
  },
  itemText: {
    marginLeft: 10,
    paddingRight: 80
  },
  header: {
    width: 350,
    flex: 1,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 50
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  check: {
    marginLeft: 100,
    flex: 1
  },
  del: {
    marginRight: 20,
    flex: 1
  }
});
