import Button from "@/app/components/button";
import {GoBell, GoCloud, GoDatabase} from "react-icons/go";

export default function ButtonPage() {
    return (
       <div>
           <div>
               <Button outline success className="mb-5" rounded><GoBell />asdf asdf</Button>
           </div>
           <div>
               <Button danger outline><GoCloud />zxcv zxcv</Button>
           </div>
           <div>
               <Button warning><GoDatabase />qwer qwer</Button>
           </div>
           <div>
               <Button secondary>fdsa</Button>
           </div>
           <div>
               <Button primary rounded>rewq</Button>
           </div>
       </div>
    )
}