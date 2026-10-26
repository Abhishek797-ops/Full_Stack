function checkLight() {
            let lightColor = document.getElementById("lightColor").value.toLowerCase();

            if (lightColor === "red") {
                console.log("STOP");
                document.getElementById("result").innerHTML = "STOP";
            }
            else if (lightColor === "yellow") {
                console.log("SLOW DOWN");
                document.getElementById("result").innerHTML = "SLOW DOWN";
            }
            else if (lightColor === "green") {
                console.log("GO");
                document.getElementById("result").innerHTML = "GO";
            }
            else {
                console.log("Invalid light color");
                document.getElementById("result").innerHTML = "Invalid light color";
            }
        }