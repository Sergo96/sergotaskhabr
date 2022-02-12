import React, {ChangeEvent, useEffect, useState, MouseEvent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasePagination } from "../../components/Pagination/BasePagination";
import { PictureCard } from "../../components/PictureCard/PictureCard";
import { iPicture } from "../../interfaces/picturesTypes";
import { sortObj } from "../../redux/actions/actions";
import "./Home.css";


export const Home = () => {
    const data = useSelector((state:any) => state.data.pictures);
    const dipatch = useDispatch();
    const [pageNo, setPageNumber] = useState<any>(1);
    const [sortBy, setSortBy] = useState<boolean>(true);
    const [currentPageData, setCurrentPageData] = useState<iPicture[]>([]);

    useEffect(() => {
        setCurrentPageData(data[pageNo])
    })    

    const handleChangePage = (event:ChangeEvent, newPage:number) => setPageNumber(newPage);   

    const handleDeleteItem = (id:number, e:MouseEvent<HTMLElement>) => {
        const index = currentPageData.findIndex((item) => item.id === id)
        e.preventDefault()
        e.stopPropagation()        
        setCurrentPageData((prevState) => prevState.splice(index, 1))
    }

    return(
        <div className="home">
            <button className="sortButton" onClick={() => {
                setSortBy(prevState => !prevState)
                dipatch(sortObj(data, sortBy)
            )}}
            >
                Sort by Id
            </button>
            <div className="cardContainer">
                {currentPageData?.map((item:iPicture) => <PictureCard 
                                                            key={item.id} 
                                                            id={item.id}
                                                            title={item.title}
                                                            handleDeleteItem={handleDeleteItem} 
                                                            thumbnailUrl={item.thumbnailUrl} 
                                                            url={item.url}
                                                        />)}
            </div>
            <BasePagination count={100} handleChangePage={handleChangePage}/>            
        </div>
    )
}