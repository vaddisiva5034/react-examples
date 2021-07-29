const getData = () => {
  console.log("get1");
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= 1000000; i++) {
      //console.log("from method 1 -> " + i);
    }
    reject("abc");
  });
};

const getData2 = () => {
  console.log("get2");
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= 1000; i++) {
      //console.log("from method 2 -> " + i);
    }
    resolve("getData2");
  });
};

const main = async () => {
  try {
    let a = await getData();
    console.log(a);
    getData2().then((abc) => {
      console.log(abc);
    });
    console.log("finished");
  } catch (e) {
    console.log("error ->", e);
  }
};

const a = () => {
  for (let i = 1; i <= 1000; i++) {
    console.log("from method 1 -> " + i);
  }
  return "some";
};

const b = () => {
  for (let i = 1; i <= 1000; i++) {
    console.log("from method 2 -> " + i);
  }
  return "some1";
};

const c = () => {
  a();
  b();
};
main();
