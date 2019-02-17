## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null:false, foreign_key:rue|
|mail_add|string|null: false|
|pass|string|null: false|

### Association
- has_many :messages
  belongs_to :groups
  belongs_to :members

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null:false|
|image|string|null:false|
### Association
- has_many :users
  belongs_to :groups
  belongs_to :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null:false, foreign_key:true|


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
