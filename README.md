## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|string|null:false, foreign_key:rue|
|mail_add|string|null: false|
|pass|string|null: false|
|edit|string|null: false|

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null:false|
|image|string||
|maessage_time|integer|

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_create|string|null:false|
|group_edit|string|null:false|
|group_id|string|null:false, foreign_key:true|

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
