function spawnVehicles(){
    if (frameCount%60===0){
      vehicles = createSprite(1480,random(250,680),30,random(40,60));
      vehicles.velocityX = -8;
      vehicles.setCollider("circle",-25,-15,50);
      vehicles.lifetime = 550;
      
      var rand = Math.round(random(1,18));
        switch(rand) {
          case 1: vehicles.addImage(img1);
                  break;
          case 2: vehicles.addImage(img2);
                  break;
          case 3: vehicles.addImage(img3);
                  break;
          case 4: vehicles.addImage(img4);
                  break;
          case 5: vehicles.addImage(img5);
                  break;
          case 6: vehicles.addImage(img6);
                  break;        
          case 7: vehicles.addImage(img7);
                  break;
          case 8: vehicles.addImage(img8);
                  break;
          case 9: vehicles.addImage(img9);
                  break;
          case 10: vehicles.addImage(img10);
                  break;
          case 11: vehicles.addImage(img11);
                  break;
          case 12: vehicles.addImage(img12);
                  break;
          case 13: vehicles.addImage(img13);
                  break;
          case 14: vehicles.addImage(img14);
                  break;
          case 15: vehicles.addImage(img15);
                  break;
          case 16: vehicles.addImage(img16);
                  break;        
          case 17: vehicles.addImage(img17);
                  break;
          case 18: vehicles.addImage(img18);
                  break;
        default: break;
        }
  
      VehicleGroup.add(vehicles);
    }
  }
  