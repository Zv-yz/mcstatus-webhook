<h1 align="center">MCStatus Webhook</h1>
<p align="center">
Updates your Discord webhook every 45 seconds with the information from your Minecraft server.
<br><br>
<img src="https://i.imgur.com/sRV2DiB.png" style="width: 30%"></img>
</p>

<h1 align="center">Usage</h1>

- ### Installation
  - Clone repo from git.
    
    ```shell
    > git clone https://github.com/Zv-yz/mcstatus-webhook
    ```  
  - Create your **`.env`** file using **`.env.example`**.
    
    ```
    WEBHOOK=https://discord.com/api/webhooks/XXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXX
    MESSAGE_ID=XXXXXXXXXXXXXXXXXXX
    IP_SERVER=localhost
    PORT=25565
    ```
  - Player Tags (Optional)
    - You can add player tags on line `12` from `src/main.ts`
    - ```typescript
      let PlayerTags: Tags = {
          'c4f583fe-dc83-4b8c-aa8c-81c07c986104': 'OWNER', // Zv_yz___
          '310d7107-7ce9-49f9-a01e-fa15d7bfb0e1': 'ADMIN', // Felizins
      };
      ```
  - Install the dependencies:
    
    ```shell
    > npm i
    ```

- ### Starting
   ```shell
   > npm start
   ```