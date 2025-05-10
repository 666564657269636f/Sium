login_data = {
    "password": "password",
    "username": "sium"
}

res = requests.post(f"{BASE_URL}/login", json=login_data)
print("Login:", res.status_code, res.json())
