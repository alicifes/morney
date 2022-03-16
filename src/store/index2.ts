import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store ={
  //方便于拓展,浅拷贝
//record store
...recordStore,
//tag store
 ...tagStore,
}

export default  store;