// FoodListContainer.jsx
import React, { useMemo, useState } from "react";

export default function FoodContainer() {
  const [koreanName, setKoreanName] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [items, setItems] = useState([]); // { id, label, checked }

  const selectedCount = useMemo(
    () => items.reduce((acc, it) => acc + (it.checked ? 1 : 0), 0),
    [items]
  );

  const canAdd = koreanName.trim().length > 0 && englishName.trim().length > 0;

  const handleAdd = () => {
    const ko = koreanName.trim();
    const en = englishName.trim();
    if (!ko || !en) return;

    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), label: `${ko} (${en})`, checked: false },
    ]);

    setKoreanName("");
    setEnglishName("");
  };

  const toggleChecked = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const handleDeleteSelected = () => {
    setItems((prev) => prev.filter((it) => !it.checked));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <input
        type="text"
        value={koreanName}
        onChange={(e) => setKoreanName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="한국 음식 이름"
      />
      <input
        type="text"
        value={englishName}
        onChange={(e) => setEnglishName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="영어 음식 이름"
      />
      <button onClick={handleAdd} disabled={!canAdd}>
        추가
      </button>
      <button onClick={handleDeleteSelected} disabled={selectedCount === 0}>
        선택 삭제
      </button>

      <div>
        {items.length === 0 ? (
          <p>아직 추가된 항목이 없어요.</p>
        ) : (
          items.map((it) => (
            <label key={it.id}>
              <input
                type="checkbox"
                checked={it.checked}
                onChange={() => toggleChecked(it.id)}   
              />
              <span>{it.label}</span>
            </label>
          ))
        )}
      </div>

      {items.length > 0 && (
        <p>
          선택됨: {selectedCount} / {items.length}
        </p>
      )}
    </div>
  );
}
