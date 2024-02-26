import StringOne from './stringOne';
import StringTwo from './stringTwo';
import StringThree from './stringthree';

export default function Menu() {
    return (
        <>
            <StringOne />
            <StringTwo />
            <StringThree
                text="Växter inomhus" />
            <StringThree
                text="Uteväxter" />
            <StringThree
                text="Krukor" />
            <StringThree
                text="Inredning" />
            <StringThree
                text="Odla" />
            <StringThree
                text="Uteplats och fritid" />
            <StringThree
                text="Trädgårdsskötsel" />
            <StringThree
                text="Husdjur" />
            <StringThree
                text="Butiker" />
            <StringThree
                text="Outlet" />
            <StringThree
                text="Tips och råd" />
            <StringThree
                text="Presentkort" />
        </>
    );
}