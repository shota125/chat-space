## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null:false, foreign_key:true|
|mail_add|string|null: false|
|pass|string|null: false|

### Association
- has_many :messages
- belongs_to :group
- belongs_to :member

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|null:false|
### Association
- has_many :users
- belongs_to :group
- belongs_to :member

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
