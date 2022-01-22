import {tempIssues} from "../core/data/issues_temp";
import MIssueCard from "../core/ui-kit/card/issuecard";

export default function MIssueOverView() {
    return(
        <div className="container ant-row pt-30">
            {
                tempIssues.map((el) => (
                    <div className="ant-col-6 ant-col-sm-24 ant-col-md-8 ant-col-xl-6" key={el.id}>
                        <MIssueCard info={el}/>
                    </div>
                ))
            }
        </div>
    )
}
