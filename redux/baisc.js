console.clear();
//people
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
const createCliam = (name, amount) => {
  return {
    type: "CREATE_CLIAM",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
const deltePolicy = (name, amount) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

//Reducers

const cliamHistory = (oldListOfCliams = [], action) => {
  if (action.type == "CREATE_CLIAM") {
    return [...oldListOfCliams, actions.payload];
  }
  return oldListOfCliams;
};
const accounting = (bagOfMoney = 0, action) => {
  if (action.type == "CREATE_CLIAM") {
    return bagOfMoney - action.amount;
  } else if (action.type == "CREATE_POLICY") {
    return bagOfMoney + action.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type == "CREATE_POLICY") {
    return [...oldListOfCliams, actions.payload.name];
  } else if (action.type == "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== actions.payload.name);
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  cliamHistory: cliamHistory,
  policies: policies,
});

const store = createStore(ourDepartments);
const action = createPolicy("kiran", 20);
store.dispatch(action);
