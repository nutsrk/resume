Feature: ผู้ใช้เข้าหน้า Home

    Scenario: ผู้ใช้เข้าหน้า Home
      Given ผู้ใช้เข้าหน้า home
      Then  ระบบแสดงข้อมูลหน้า home 
    
    Scenario: ผู้ใช้ทำการกดเข้าไปที่หน้า about me
      Given   ผู้ใช้กดเข้าไปที่หน้า about me
      When    ผู้ใช้งานทำการเลือกไปที่หน้า resume และทำการกดเลือกไปที่ about me
      Then    ระบบแสดงข้อมูลเกี่ยวกับประวัติส่วนตัว
      
    Scenario: ผู้ใช้ทำการกดเข้าไปที่หน้า education
      Given   ผู้ใช้กดเข้าไปที่หน้า education
      When    ผู้ใข้งานทำการเลือกไปที่หน้า resume และทำการกดเลือกไปที่ education
      Then    ระบบแสดงข้อมูลเกี่ยวกับประวัติการศึกษา


    