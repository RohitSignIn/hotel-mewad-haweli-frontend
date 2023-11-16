const datesArray = [];

const deluxRoom = document.getElementById("deluxRoom");
const familyRoom = document.getElementById("familyRoom");

for (let i = 0; i < 40; i++) {
  const date = new Date(); // current date
  const nextDate = new Date(date.setDate(date.getDate() + i)); // add 'i' days to current date
  datesArray.push(nextDate);
}

datesArray.forEach((date) => {
  // Format date - START
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const formattedDate = `${day} ${month}`;
  // Format date - END

  // DELUXE ROOM - START
  // Setting up Room Card - START
  const deluxRoomNode = document.createElement("div");
  deluxRoomNode.setAttribute("class", "date_card");
  deluxRoomNode.innerHTML = `<p>${formattedDate}</p> <p>Morning</p> <p>Evening</p>`;
  // Setting up Room Card - END

  deluxRoom.append(deluxRoomNode);
  // DELUXE ROOM - END

  // Family ROOM - START
  // Setting up Room Card - START
  const familyRoomNode = document.createElement("div");
  familyRoomNode.setAttribute("class", "date_card");
  familyRoomNode.innerHTML = `<p>${formattedDate}</p> <p>Morning</p> <p>Evening</p>`;
  // Setting up Room Card - END

  familyRoom.append(familyRoomNode);
  // Family ROOM - END
});
