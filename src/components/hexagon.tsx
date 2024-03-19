import { HexGrid, Layout, Hexagon, Pattern } from 'react-hexgrid';
import '../App.css';
import React from "react";
import styles from './hexagon.module.css';
import MensenIMG from '../Images/Mensen.png';
import MulticolorIMG from '../Images/Multicolor.png';
import BolletjeIMG from '../Images/Bolletje.png';
import SmileIMG from '../Images/Smile.png';

class HexagonComponent extends React.Component {

    coordinates(){
        return [[0, 0, 0, 2], [0, 1, 0, 1], [0, 2, 0, 1], [0, 3, 0, 1], [0, 4, 0, 1], [1 ,4 ,0 ,1] , [2, 4, 0, 1],
            [-6, 8, 0, 1], [-5, 8, 0, 1], [-4, 8, 0, 1], [-3, 7, 0, 1], [-2, 6, 0, 1], [-1, 5, 0, 1], [-7, 8, 0, 1],
            [-8, 8, 0, 1], [-8, 7, 0, 1], [-8, 6, 0, 1], [-8, 5, 0, 1],
            [-8, 4, 0, 1], [-7, 3, 0, 1], [-6, 2, 0, 1], [-5, 1, 0, 1], [-3, 0, 0, 1], [-2, 0, 0, 1],
            [-1, 0, 0, 1], [1, -1, 0, 1], [2, -2, 0, 1], [3, -3, 0, 1],
            [4, -4, 0, 1] ,[5, -4, 0, 1], [6, -4, 0, 1], [7, -4, 0, 1], [8, -4, 0, 1],
            [8, -3, 0, 1], [8, -2, 0, 1], [8, -1, 0, 1], [8, 0, 0, 1], [7, 1, 0, 1], [6, 2, 0, 1],
            [5, 3, 0, 1], [4, 4, 0, 1], [3, 4, 0, 1], [4, -5, 0, 1], [4, -6, 0, 1], [4, -7, 0, 1],
            [4, -8, 0, 1], [3, -8, 0, 1], [2, -8, 0, 1], [1, -8, 0, 1], [0, -8, 0, 1], [-1, -7, 0, 1],
            [-2, -6, 0, 1], [-3, -5, 0, 1], [-4, -4, 0, 1], [-4, -3, 0, 1], [-4, -2, 0, 1],[-4, -1, 0, 1], [-4, -0, 0, 1],
        ];}

    render() {

        const coordinates = this.coordinates()

        return (
            <div className={styles.hexcontainer}>
                <HexGrid className={""} width={"100%"} height={"100%"} viewBox={"-175 -175 350 350"}>
                    <Layout size={{x: 10, y: 10}} flat={true} spacing={1.1} origin={{x: 0, y: 0}}>
                        {coordinates.map((coord, index) => {
                            const [q, r, s, className] = [Number(coord[0]), Number(coord[1]), Number(coord[2]), coord[3].toString()];
                            return this.renderHexagon(q, r, s, className, index);
                        })}
                    </Layout>
                </HexGrid>
            </div>
        );
    }

    renderHexagon(q: number, r: number, s: number, className: string, index: number) {
        const key = `${q},${r},${s}`;
        const imageUrl = this.imageMapping[key];

        console.log(`Hexagon at q=${q}, r=${r}, s=${s} has className=${className}`);

        let hexSize = 10;

        if (q===0 && r===0 && s===0) {
            hexSize = 20;
        }


        if (imageUrl) {
            const patternId = `pattern-${key}`;
            return (
                <Hexagon key={index} q={q} r={r} s={s} fill={patternId}  className={styles.centerImage}>
                    <Pattern id={patternId} link={imageUrl} size={{ x: hexSize, y: hexSize }} />
                </Hexagon>
            );
        } else {
            return <Hexagon textAnchor={key} key={index} q={q} r={r} s={s} className={styles[`style${className}`]}>
                {/*<text className={styles.coordinates}>{key}</text>*/}
            </Hexagon>;
        }
    }

    selectPhoto() {
        const photo = [
            MensenIMG,
            BolletjeIMG,
            SmileIMG
        ];
        const random = Math.floor(Math.random() * photo.length);
        return photo[random];
    }

    imageMapping: { [key: string]: string } = {

        [`${-2},${-0},${0}`]: MulticolorIMG,
        [`${-4},${-1},${0}`]: MulticolorIMG, [`${-4},${-1},${0}`]: MulticolorIMG, [`${-6},${8},${0}`]: MulticolorIMG, [`${-8},${7},${0}`]: MulticolorIMG, [`${0},${1},${0}`]: MulticolorIMG,
        [`${2},${4},${0}`]: MulticolorIMG, [`${8},${-1},${0}`]: MulticolorIMG, [`${5},${-4},${0}`]: MulticolorIMG, [`${3},${-8},${0}`]: MulticolorIMG, [`${-3},${-5},${0}`]: MulticolorIMG,

        [`${-4},${0},${0}`]: this.selectPhoto(), [`${-6},${2},${0}`]: this.selectPhoto(), [`${-8},${4},${0}`]: this.selectPhoto(),
        [`${-8},${6},${0}`]: this.selectPhoto(), [`${-8},${8},${0}`]: this.selectPhoto(), [`${-4},${-8},${0}`]: this.selectPhoto(),
        [`${-2},${6},${0}`]: this.selectPhoto(), [`${0},${4},${0}`]: this.selectPhoto(), [`${0},${2},${0}`]: this.selectPhoto(),
        [`${4},${4},${0}`]: this.selectPhoto(), [`${6},${2},${0}`]: this.selectPhoto(), [`${8},${0},${0}`]: this.selectPhoto(),
        [`${8},${-2},${0}`]: this.selectPhoto(), [`${8},${-2},${0}`]: this.selectPhoto(), [`${8},${-4},${0}`]: this.selectPhoto(),
        [`${6},${-4},${0}`]: this.selectPhoto(), [`${4},${-4},${0}`]: this.selectPhoto(), [`${4},${-6},${0}`]: this.selectPhoto(),
        [`${4},${-8},${0}`]: this.selectPhoto(), [`${2},${-8},${0}`]: this.selectPhoto(), [`${-2},${-6},${0}`]: this.selectPhoto(),
        [`${-4},${-4},${0}`]: this.selectPhoto(), [`${-4},${-2},${0}`]: this.selectPhoto(), [`${0},${-8},${0}`]: this.selectPhoto()
    };
}

export default HexagonComponent;