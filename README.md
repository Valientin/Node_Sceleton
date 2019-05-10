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
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
```

* **Sample Response:**
```
{
    "token": "tpygGwGXFLHhc1l7Xc56kZc8TYKWe1bcGfScW7Ge0Ym"
}
```
