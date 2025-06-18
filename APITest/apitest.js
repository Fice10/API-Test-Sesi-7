const { expect } = require("chai");

describe("API Reqres.in", () => {
  it("GET user", async () => {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.data.id).to.equal(2);
  });

  it("POST create user", async () => {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1"
    },
    body: JSON.stringify({
      name: "fikri",
      job: "it support"
    })
  });
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Body:", data);

  expect(response.status).to.equal(201);
  expect(data.name).to.equal("fikri");
  expect(data.job).to.equal("it support");
});

  it("PATCH update user", async () => {
  const response = await fetch("https://reqres.in/api/users/2", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1"
    },
    body: JSON.stringify({
      name: "Fikri Update",
      job: "QA"
    })
  });
  const data = await response.json();
  console.log("PATCH status:", response.status);
  console.log("PATCH response:", data);

  expect(response.status).to.equal(200);
  expect(data.name).to.equal("Fikri Update");
});

  it("DELETE user", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1"
    },
    });
    expect(response.status).to.equal(204);
  });
});
