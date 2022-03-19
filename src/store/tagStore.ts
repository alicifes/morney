import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';


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


const tagStore = {
  tagList: [] as Tag[],
  fetchTags(){
   this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
   return this.tagList
  },
  findtag(id: string) {
    return this.taglist.filter(t => t.id === id)[0];
  },
  creatTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('请输入不同的标签名称');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name: name});
    this.saveTags();
    window.alert('添加成功');
    return 'success';
  },
  removeTag (id: string){
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        tag.id = name;
        this.saveTags();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
};

tagStore.fetchTags();

export default tagStore;