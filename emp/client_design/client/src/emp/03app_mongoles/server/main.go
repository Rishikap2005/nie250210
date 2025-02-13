package main
import (
	
	"net/http"

	"github.com/gin-gonic/gin"
)

 type Emp struct {
	Id string
	Name string
	Designation string
	Technology string
	Salary float32
	Commission float32
	Phonenumber int
 }
 func readallemp(c *gin.Context){
Employees:=[]Emp{{Id: "201",Name: "AI 845",Designation: "Air India",Technology: "Mumbai",Salary: 20,Commission: 180,Phonenumber: 15000},
	{Id: "201",Name: "AI 845",Designation: "Air India",Technology: "Mumbai",Salary: 20,Commission: 180,Phonenumber: 15000},
}

	c.JSON(http.StatusOK,Employees)
 }
 func readempbyid(c *gin.Context){
	id:=c.Param("id")
	flight:=Emp{Id: id,Name: "AI 845",Designation: "Air India",Technology: "Mumbai",Salary: 20,Commission: 180,Phonenumber: 15000}

	c.JSON(http.StatusOK,flight)
 }
 func createemp(c *gin.Context){
	var jbodyflight Emp
	err:=c.BindJSON(&jbodyflight)
	if err!=nil{
	c.JSON(http.StatusInternalServerError,
	gin.H{"error":"Server Error."+err.Error()})
	return
	}
	createflight:=Emp{Id: "201",Name: "AI 845",Designation: "Air India",Technology: "Mumbai",Salary: 20,Commission: 180,Phonenumber: 15000}
	c.JSON(http.StatusCreated,
	gin.H{"messege":"employee Created Sucessfully.","flight":createflight})
 }
 func updateemp(c *gin.Context){
	id:=c.Param("id")
	var jbodyflight Emp
	err:=c.BindJSON(&jbodyflight)
	if err!=nil{
	c.JSON(http.StatusInternalServerError,
	gin.H{"error":"Server Error."+err.Error()})
	return
	}
	updateflight:=Emp{Id: id,Name: "AI 845",Designation: "Air India",Technology: "Mumbai",Salary: 20,Commission: 180,Phonenumber: 15000}
	c.JSON(http.StatusOK,
	gin.H{"messege":"employee updated Sucessfully.","flight":updateflight})
 }
 func deleteemp(c *gin.Context){
	c.JSON(http.StatusOK,
	gin.H{"messege":"employee deleted Sucessfully."})
 }
 func main(){
	// flight1:=Flight{Id: "201",Num: "AI 845",Airline: "Air India",Source: "Mumbai",Destination: "Destination",Capacity: 180,Price: 15000.0}
	// fmt.Println(flight1)
	r:=gin.Default()
	r.GET("/flights",readallemp)
	r.GET("/flights/:id",readempbyid)
	r.POST("/flights",createemp)
	r.PUT("/flights/:id",updateemp)
	r.DELETE("/flights/:id",deleteemp)
	
	r.Run(":8080")
 }