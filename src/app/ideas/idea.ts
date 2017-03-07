export class Idea {

  public _id: any;

  public title: string;

  public description : string;

  public tags : Array<string>;

  public mongoId(){
    return this._id.$oid;
  }


}
