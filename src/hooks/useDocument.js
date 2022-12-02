import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export function useDocument(collection, id) {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id)

    const unsub = ref.onSnapshot((snapshot) => {
      if(snapshot.data()) {
        setDocument({...snapshot.data(), id: snapshot.id})
        setError(null)

      } else {
        setError('Sorry, this documents does not exist')
      }
    }, (err) => {
      console.log(err.message)
      setError('failed to get the document')
    })

    return () => unsub()
  }, [collection, id])

  return {document, error}
}