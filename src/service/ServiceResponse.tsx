import { BasicInfo } from "../models/LeftSidebarModel"

export default interface Result {
    res: {
        data: [{
            _id: string,
            basic_info: BasicInfo
        }],
        requestId: string
    }
}