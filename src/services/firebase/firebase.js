import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};



const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId ?
      query(collection(firestoreDb, 'items'), where('category', '==', categoryId)) :
      collection(firestoreDb, 'items')

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })

        resolve(products)
    }).catch((error) => {
        reject('Error obteniendo productos: ', error)
    })
  })}
  export const getCategories = (categoriesId) => {
    return new Promise((resolve, reject) => {
      const collectionRef = categoriesId ?
        query(collection(firestoreDb, 'items'), where('category', '==', categoriesId)) :
        collection(firestoreDb, 'items')

  getDocs(collection(firestoreDb, 'categories')).then(response => {
    const categories = response.docs.map(category => {
        return { id: category.id, ...category.data() }
    })
    resolve(categories)
})
}, [])
}

export const getProductById = (productId) => {
  return new Promise((resolve ,reject) => {
    const docRef = doc(firestoreDb, 'items', productId)

    getDoc(docRef).then(response => {
        const product = { id: response.id, ...response.data()}
        resolve(product)
    }).catch((error) => {
        reject('Error obteniendo producto: ', error)
    })
  })
}