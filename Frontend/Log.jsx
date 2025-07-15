const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYWtzaGFtYmFodWd1bmEzQGdtYWlsLmNvbSIsImV4cCI6MTc1MjU1ODA5NiwiaWF0IjoxNzUyNTU3MTk2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmU5M2FjNGEtYWM2My00OGQxLThkOGItMDMyODg4NTYyYTQxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2Frc2hhbSBiYWh1Z3VuYSIsInN1YiI6ImRlOWYyMTc2LWI1NTUtNDliMC05MWRhLWQwYjA3ZjdmZTc2OSJ9LCJlbWFpbCI6InNha3NoYW1iYWh1Z3VuYTNAZ21haWwuY29tIiwibmFtZSI6InNha3NoYW0gYmFodWd1bmEiLCJyb2xsTm8iOiIyMjE5NTE0IiwiYWNjZXNzQ29kZSI6IlFBaERVciIsImNsaWVudElEIjoiZGU5ZjIxNzYtYjU1NS00OWIwLTkxZGEtZDBiMDdmN2ZlNzY5IiwiY2xpZW50U2VjcmV0IjoiZFZwQ3l4Q2RjVmdiZWFYViJ9.Q1sk2L_r5_fGilfRoYHQwUgmQUVQQa_1FLNjGyKeaVI";

export function Log({ stack, level, package: pkg, message }) {
  fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      stack,
      level,
      package: pkg,
      message
    })
  })
    .then(res => res.json())
    .then(data => console.log("Logged:", data))
    .catch(err => console.error("Logging error:", err));
}
