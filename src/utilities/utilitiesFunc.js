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
  } else {
    return [];
  }
};

const installAppToLS = (id) => {
  const storedAppData = getInstalledApp();

  if (storedAppData.includes(id)) {
    alert("app already installed");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installed", data);
  }
};

export { downloadFormation, installAppToLS, getInstalledApp };
