const loaclStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'success' | 'duplicated'; //success表示成功。duplicated表示重复,该方法叫联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void,
  remove: (id: string) => boolean,
}
const tagListModel: TagListModel = {
  data: [],
  create(name) {
    //this.data= [{id:'1'},{name:'2'}]
    const names = this.data.map(item => item.name);
    console.log(name);
    console.log(names);
    if (names.indexOf(name) >= 0) {
      console.log('enter');
      return 'duplicated';
    }
    this.data.push({id: name, name: name});
    this.save();
    return 'success';

  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        tag.id = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(loaclStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  }
};

export {tagListModel};