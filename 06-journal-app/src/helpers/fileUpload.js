export const fileUplooad = async (file) => {
  if (!file) throw new Error("There´s no exist any file to upload");

  const cloudUrl = " https://api.cloudinary.com/v1_1/dyjqiidw4/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, { method: "POST", body: formData });
    if (!resp.ok) throw new Error("There´s a problem with the upload");
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
