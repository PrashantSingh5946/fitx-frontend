export const decodeLoginCredential = (token: string) => {
  try {
    let data = JSON.parse(atob(token.split(".")[1]));
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
