//EXAMPLES OF FUNCTIONS
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req, res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created successfully")
    })
})

app.delete("/books/:id",(req, res)=>{
    const q = "DELETE FROM books WHERE id = ?"
    const values = [req.params.id]

    db.query(q,values,(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted successfully")
    })
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
});