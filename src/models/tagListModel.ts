const loaclStorageKeyName = 'tagList';
type Tag = {
  id:string;
  name:string;
}
type TagListModel = {
  data: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'success'|'duplicated'; //success表示成功。duplicated表示重复,该方法叫联合类型
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  create(name) {
    //this.data= [{id:'1'},{name:'2'}]
    const names = this.data.map(item=> item.name)
    console.log(name);
    console.log(names);
    if (names.indexOf(name) >= 0) {
      console.log('enter');
      return 'duplicated';
    }
    this.data.push({id:name,name:name});
    this.save();
    return 'success';

  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(loaclStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
  }
};

export {tagListModel};