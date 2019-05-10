# Application

Registers the application in the system and assigns it a token that will be riveted as a header('X-App-Key') to perform other requests. NOTE: If there is no registered application yet, you need to add it manually in the database.

**Create**

  [POST] /api/v1/application/create
  
*  **URL Headers**
   
   **Required:**
   
    'X-App-Key': token
  
*  **URL Params**

   **Required:**

   `name=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token : ddk3e4lxvkwckb24p.pv24sdkkkf3 }`
 
* **Error Response:**

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "No application token" }`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Not application name" }`
    
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Application with this name already exist" }`

* **Sample Call:**

```
  $.ajax({
      url: "/api/v1/application/create",
      dataType: "json",
      data: {
         name: "Uran"
      },
      type : "POST"
    });
```

* **Sample Response:**
```
{
    "token": "tpygGwGXFLHhc1l7Xc56kZc8TYKWe1bcGfScW7Ge0Ym"
}
```

# Users

Fake users for leaderBoard.

**Fill**

  Added 20 users to database with fake attributes(firstName, userName).

  [POST] /api/v1/users/fill
  
*  **URL Headers**
   
   **Required:**
   
    'X-App-Key': token
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{  message: 'Added 20 users with fake attributes' }`
 
* **Error Response:**

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "No application token" }`

* **Sample Call:**

```
  $.ajax({
      url: "/api/v1/users/fill",
      dataType: "json",
      type : "POST"
    });
```

* **Sample Response:**
```
{
    "message": "Added 20 users with fake attributes"
}
```

# LeaderBoard

Returns fake data about the latest winners.

**Fill**

  Fills the winners database with fake data(wonMoney - randomly up to 500 00, date - randomly last year, user - from existing).

  [POST] /api/v1/leaderboard/fill
  
*  **URL Headers**
   
   **Required:**
   
    'X-App-Key': token

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Fill history for random 20 users' }`
   OR
  * **Code:** 200 <br />
    **Content:** `{ message: 'No users' }`
 
* **Error Response:**

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "No application token" }`

* **Sample Call:**

```
  $.ajax({
      url: "/api/v1/leaderboard/fill",
      dataType: "json",
      type : "POST"
    });
```

* **Sample Response:**
```
{
    "message": "Fill history for random 20 users"
}
```


**Get history**

  [GET] /api/v1/leaderboard/history
  
*  **URL Headers**
   
   **Required:**
   
    'X-App-Key': token
  
*  **URL Query Params**
   `startDate=[Date] - default one month ago`
   `endDate=[Date] - default current date`
   `type=[only 'all' value] - if type equal 'all' then ignored startDate and endDate`
   `limit=[Number] - max count of rows in response(default 25)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```{ "leaders": [
        {
            "firstName": "Ethel",
            "userName": "Flavie.V****",
            "link": "http://localhost:3000",
            "wonMoney": 102
        }
    ] }```
 
* **Error Response:**

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "No application token" }`

* **Sample Call:**

```
  $.ajax({
      url: "/api/v1/leaderboard/history",
      dataType: "json",
      data: {
         startDate: "01.01.2019",
         endDate: "01.02.2019",
         limit: 25
      },
      type : "GET"
    });
```

* **Sample Response:**
```
{
    "leaders": [
        {
            "firstName": "Misael",
            "userName": "Eli**",
            "link": "http://localhost:3000",
            "wonMoney": 495327
        },
        {
            "firstName": "Nikita",
            "userName": "Annalis***",
            "link": "http://localhost:3000",
            "wonMoney": 493230
        },
        {
            "firstName": "Everette",
            "userName": "Kaia_Mill****",
            "link": "http://localhost:3000",
            "wonMoney": 354504
        },
        ...
}
```
