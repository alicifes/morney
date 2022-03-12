const loaclStorageKeyName = 'recordList'
const model = {
  clone(data:RecordItem[] | RecordItem){
   return JSON.parse(JSON.stringify(data))
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem(loaclStorageKeyName)||'[]') as RecordItem[];
  },
  save(data:RecordItem[]){
    window.localStorage.setItem(loaclStorageKeyName,JSON.stringify(data))
  }
}

export {model};