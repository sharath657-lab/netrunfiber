const handleSubmit = async (e: any) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await res.json()

    console.log(data)

    if (data.success) {
      alert("Account Created Successfully")
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.log(error)
    alert("Signup Failed")
  }
}