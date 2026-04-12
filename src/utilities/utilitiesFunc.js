import { Bounce, toast } from "react-toastify";

const downloadFormation = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

const getInstalledApp = () => {
  const storedAppString = localStorage.getItem("installed");

  if (storedAppString) {
    const storedAppData = JSON.parse(storedAppString);
    return storedAppData;
  }
  return [];
};

const saveInstalledAppLS = (id) => {
  const data = JSON.stringify(id);
  localStorage.setItem("installed", data);
};

const installAppToLS = (id) => {
  const storedAppData = getInstalledApp();

  if (storedAppData.includes(id)) {
    alert("app already installed");
  } else {
    const newStoredAppData = [...storedAppData, id];
    toast.success("🦄 App Installed Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    saveInstalledAppLS(newStoredAppData);
  }
};

const removeInstalledAppFromLS = (id) => {
  const storedAppData = getInstalledApp();

  const remainingInstalledAppToLS = storedAppData.filter(
    (appId) => Number(appId) !== Number(id)
  );

  // const remainingInstalledAppToLS = storedAppData.filter(
  //   (appId) => appId !== id
  // );
  saveInstalledAppLS(remainingInstalledAppToLS);

  toast.error("🦄 App Uninstalled Successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export {
  downloadFormation,
  installAppToLS,
  getInstalledApp,
  removeInstalledAppFromLS,
};
