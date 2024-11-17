import React, { useState } from 'react';
import './Signup.css'
import Nif_Login from '../../Component/Nif_Login';
import Tel_Login from '../../Component/Tel_Login';

export default function Signup() {
    const tabs = [
        { label: "Inscription par NIF", content: <Nif_Login /> },
        { label: "Inscription par Telephone", content: <Tel_Login /> },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div style={styles.container}>
            {/* En-têtes des onglets */}
            <div style={styles.tabHeaders}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            ...styles.tabButton,
                            ...(activeTab === index ? styles.activeTab : {}),
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Contenu de l'onglet actif */}
            <div style={styles.tabContent}>
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
        width: "600px",
        border: "1px solid #ccc",
        borderRadius: "8px",
    },
    tabHeaders: {
        display: "flex",
        borderBottom: "1px solid #ccc",
    },
    tabButton: {
        flex: 1,
        padding: "10px",
        cursor: "pointer",
        border: "none",
        backgroundColor: "#f5f5f5",
        transition: "0.3s",
    },
    activeTab: {
        backgroundColor: "#ffffff",
        fontWeight: "bold",
        borderBottom: "2px solid #007bff",
    },
    tabContent: {
        padding: "20px",
        fontSize: "30px",
        textAlign: "center",
    },
};
