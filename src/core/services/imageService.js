import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../storage/firebase";

export async function uploadImage(file, location) {
  const storageRef = ref(storage, location);

  deleteObject(storageRef)
    .then(() => {})
    .catch((err) => {});

  const uploadTask = uploadBytesResumable(storageRef, file);

  await new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        resolve(getDownloadURL(uploadTask.snapshot.ref));
      }
    );
  });

  return getDownloadURL(uploadTask.snapshot.ref);
}
