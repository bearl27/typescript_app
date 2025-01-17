# 制作物：メモアプリ
![image](https://github.com/user-attachments/assets/6f95b7c7-1459-43ba-9cea-f61089d747e4)


# 概要
メモのリスト形式で表示し，作成，編集，削除できるもの．

# コンポーネント
1. Memo
   
   メモの1つを表示するコンポーネント
   タイトルと内容が見ることができ，内容は20文字は表示され，それ以上は...となる．
   編集ボタンと削除ボタンがある
   
   ![image](https://github.com/user-attachments/assets/2dbd769e-0b1e-4119-aadc-c6a68b10fe3c)

3. MemoList
   
   MemoがDBに格納されている分表示される．
   メモの順番をドラッグ＆ドロップで変えることはできるが，DBに保存していないため，リロードすると元に戻る．
   
   ![image](https://github.com/user-attachments/assets/82ac894f-4294-4e90-9769-4f2be5b9fe56)

   
5. MemoPage
   
   タイトルと内容を閲覧・編集できる
   
   ![image](https://github.com/user-attachments/assets/4fad49ff-dd20-473b-a036-cef733de102f)

   
7. AddMemo

   MemoPageと同じ作りの新規メモ追加ページ．
   
   uuidで一意性の保証し，idの衝突を起きないようにしている．
   
   ![image](https://github.com/user-attachments/assets/9f78302d-35f1-4eb7-9c3a-b30d27256967)

9. AddMemoButton
    
    AddMemoを開く．
   
  ![image](https://github.com/user-attachments/assets/b578deec-3592-4eff-823e-786738411e9e)

# 使用方法
1. `npm install`
   
    package.json に記載されている全ての依存パッケージをインストールする
3. `npm run dev`
   
   devは`http://localhost:3000 `でフロントエンドのサーバーを起動する
5. `npm run json-server`

   json-serverは`http://localhost:3001`でAPIサーバーを起動する

# 改善点
- 現段階ではD&Dで順序を入れ替えることはできるが，それをDBに保存していないため，リロード時に順番が元に戻ってしまう．どうするかが迷いどころだったため，そのままにした．
- 今回はフロントエンドの課題ということで，バックエンドに力をいれないため，DBにjson-serverを使用し，楽した．
