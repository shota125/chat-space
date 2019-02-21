## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false, primary_key:true|
|mail|string|null: false|
|pass|string|null: false|

### Association
- has_many :messages
- has_many :groups
- belongs_to :member

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|null:false|
### Association
- belongs_to :user
- has_many :groups
- belongs_to :member

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false, foreign_key:true|


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|refference|null: false, foreign_key: true|
|group_id|refference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
