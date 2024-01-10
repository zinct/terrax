import Compressor from "compressorjs";

export function arrayBufferToImgSrc(arrayBuffer, imgType = "jpeg") {
  const byteArray = new Uint8Array(arrayBuffer);
  const picBlob = new Blob([byteArray], { type: `image/${imgType}` });
  const picSrc = URL.createObjectURL(picBlob);
  return picSrc;
}

export function getFileExtension(file) {
  const filename = file.name;
  return filename.substring(filename.lastIndexOf(".") + 1, filename.length) || filename;
}

export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function readFileToArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export async function fileToCanisterBinaryStoreFormat(file) {
  const arrayBuffer = await readFileToArrayBuffer(file);
  return Array.from(new Uint8Array(arrayBuffer));
}

const DefauttMaxWidth = 768;

export const resizeImage = async (file, maxWidth) => {
  return new Promise((resolve) => {
    new Compressor(file, {
      quality: 0.8,
      maxWidth: maxWidth || DefauttMaxWidth,
      mimeType: "image/jpeg",
      success(result) {
        resolve(result);
      },
      error(err) {
        resolve(err);
      },
    });
  });
};
