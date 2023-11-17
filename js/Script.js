let bookedRooms = {
  deluxe: {},
  family: {},
};

let amount = 0;

function HandleBookDateClick(e, roomType) {
  const cardDate = e.target.textContent;
  if (!bookedRooms[[roomType]][[cardDate]]) {
    bookedRooms[[roomType]][[cardDate]] = {
      fetaureOne: false,
      fetaureTwo: false,
    };
    e.target.classList.add("selectedRoom");
  } else {
    delete bookedRooms[[roomType]][[cardDate]];
    e.target.classList.remove("selectedRoom");
    e.target.nextSibling.classList.remove("selectedRoom");
    e.target.nextSibling.nextSibling.classList.remove("selectedRoom");
  }
}

function HandleFeatureOneClick(e, roomType) {
  const cardDate = e.target.previousElementSibling.textContent;
  if (!bookedRooms[[roomType]][[cardDate]]) {
    bookedRooms[[roomType]][[cardDate]] = {
      fetaureOne: true,
      fetaureTwo: false,
    };
    e.target.previousElementSibling.classList.add("selectedRoom");
    e.target.classList.add("selectedRoom");
  } else {
    if (!bookedRooms[[roomType]][[cardDate]]["fetaureOne"]) {
      bookedRooms[[roomType]][[cardDate]]["fetaureOne"] = true;
      e.target.classList.add("selectedRoom");
    } else {
      bookedRooms[[roomType]][[cardDate]]["fetaureOne"] = false;
      e.target.classList.remove("selectedRoom");
    }
  }
}

function HandleFeatureTwoClick(e, roomType) {
  const cardDate =
    e.target.previousElementSibling.previousElementSibling.textContent;
  if (!bookedRooms[[roomType]][[cardDate]]) {
    bookedRooms[[roomType]][[cardDate]] = {
      fetaureOne: false,
      fetaureTwo: true,
    };
    e.target.previousElementSibling.previousElementSibling.classList.add(
      "selectedRoom"
    );
    e.target.classList.add("selectedRoom");
  } else {
    if (!bookedRooms[[roomType]][[cardDate]]["fetaureTwo"]) {
      bookedRooms[[roomType]][[cardDate]]["fetaureTwo"] = true;
      e.target.classList.add("selectedRoom");
    } else {
      bookedRooms[[roomType]][[cardDate]]["fetaureTwo"] = false;
      e.target.classList.remove("selectedRoom");
    }
  }
}
